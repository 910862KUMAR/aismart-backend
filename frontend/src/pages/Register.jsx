export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-4"
        />

        <button className="w-full bg-black text-white p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
