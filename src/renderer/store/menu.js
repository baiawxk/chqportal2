import shouqu from '@/db/shouqu.json'

import bookmarks from '@/db/bookmarks.json'

let menu = [...shouqu, ...bookmarks]
export default {
  state: {
    menu
  }
}
