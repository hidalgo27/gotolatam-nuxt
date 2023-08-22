import {defineStore} from "pinia";

export const usePackageStore = defineStore('PackageStore', () => {
	const config = useRuntimeConfig()

	const getPackage = async () => {
		let headers = new Headers();

		headers.append("Cookie", "XSRF-TOKEN=eyJpdiI6InNJV0NUNzZ4UXZHV2hsZHd0cUwxR2c9PSIsInZhbHVlIjoiVkluZUp5RmtYOVFSY0hjZTNBMjRZMHJUUmgxd0VzS0VnTXpFWUJ4Z0hQbkIrbkdDYTBSZ2RwdmpER3k5N1U2dzR6dEgwbTFyWkNsb2x1dHBzMXp6bncxbElLdjhja2Z5c3hJeUV2L08vSURQYVM5LytFL0V3eTRhVkNYU3BRbWsiLCJtYWMiOiJkMmFmODU0ZGExYmIzMTY0MGJjM2FhZGNkOTBkMTE1M2I0YTA3YmEzNTZiYTEzY2U4NmUyMWMyYzNmODAzYWZiIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IkpUNDl2RUtXWmtQUWlnS05lbXpQWWc9PSIsInZhbHVlIjoidG1tNTVwSUt0MldORkk4c2t3K0U1RjZuTVNmRE1GUkxTYVMrNTNpb1I0MkFxRFArM1dpOENGdDB6eXl0bHhKYUxUUTlxbE14cTd6QXQvZ3dkRGcxbFBCMzQ1ME1lVjJPQ05OVTNINENZZ1lvRURWM0JyMFg1OE1kNWdFZmxSSHkiLCJtYWMiOiI4ZjY4NjRjMDY4ZTFkM2VhNGJmMzg5ZGUyNjRkYjY3YzRlMjg5ZDUyNmM0ZDg1YjE2OGY1YmUwMzVhN2ViM2FjIiwidGFnIjoiIn0%3D");
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/packages", {
					method: 'GET',
					headers: headers,
					redirect: 'follow'
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				}else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
	return {
		getPackage
	}
},{persist: true})