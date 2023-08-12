import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    'bg-main': 'bg-red-500 text-[#181818] dark:(bg-red-500 text-[#fff])',
  },
}))
