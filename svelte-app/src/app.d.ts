// See https://svelte.dev/docs/kit/types#app.d.ts

import type { svelte } from "@sveltejs/vite-plugin-svelte";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace svelteHTML {
		interface HTMLAttributes<T> {
			'my-attribute'?: string;
		}
	}
}

export {};
