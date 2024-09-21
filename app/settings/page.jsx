export default function Settings() {
	return (
	  <div className="p-4">
		<h1 className="text-2xl font-bold mb-4">Settings</h1>
		<div className="bg-white p-4 rounded-lg shadow">
		  <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
		  <form>
			<div className="mb-4">
			  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
				Username
			  </label>
			  <input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				type="text"
				placeholder="Username"
			  />
			</div>
			<div className="mb-4">
			  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
				Email
			  </label>
			  <input
				className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="email"
				type="email"
				placeholder="Email"
			  />
			</div>
			<div className="flex items-center justify-between">
			  <button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
			  >
				Save Changes
			  </button>
			</div>
		  </form>
		</div>
	  </div>
	)
  }