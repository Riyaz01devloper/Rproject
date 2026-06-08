import { useState } from "react";
import API from "../services/api";

function AddSkill({ onAdd }) {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      const res = await API.post("/api/skills", {
        title,
        level,
      });

      // ✅ update parent state using backend response
      onAdd(res.data);

      // ✅ reset form
      setTitle("");
      setLevel("Beginner");

    } catch (error) {
      console.error(
        "Error adding skill:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        Add a new skill
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Skill name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Add skill
        </button>
      </div>
    </form>
  );
}

export default AddSkill;
