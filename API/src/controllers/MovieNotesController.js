const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const user_id = request.user.id;

    if (rating > 5) {
      throw new AppError("A maior nota possível é 5");
    }
    if (rating < 0) {
      throw new AppError("A menor nota possível é 0");
    }

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsInsert = tags?.map((name) => {
      return {
        note_id,
        name,
        user_id,
      };
    });

    await knex("movie_tags").insert(tagsInsert);

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const movieNote = await knex("movie_notes").where({ id }).first();
    const movieTags = await knex("movie_tags")
      .where({ note_id: id })
      .orderBy("name");

    return response.json({ ...movieNote, movieTags });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("movie_notes").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { title, tags } = request.query;

    const user_id = request.user.id;

    let notes;

    if (tags) {
      const filteredTags = tags.split(",").map((tag) => tag.trim());
      notes = await knex("movie_tags")
        .select([
          "movie_notes.id",
          "movie_notes.title",
          "movie_notes.rating",
          "movie_notes.description",
          "movie_notes.user_id",
        ])
        .where("movie_notes.user_id", user_id)
        .whereLike("movie_notes.title", `%${title}%`)
        .whereIn("name", filteredTags)
        .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
        .groupBy("movie_notes.id")
        .orderBy("movie_notes.title");
    } else {
      notes = await knex("movie_notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title");
    }

    const userTags = await knex("movie_tags").where({ user_id });
    const notesWithTags = notes.map((note) => {
      const noteTags = userTags.filter((tag) => tag.note_id === note.id);

      return {
        ...note,
        tag: noteTags,
      };
    });
    return response.json(notesWithTags);
  }
}

module.exports = MovieNotesController;
