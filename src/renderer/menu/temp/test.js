let parse = require('bookmarks-parser')
let fs = require('fs')
let path = require('path')

var data = fs.readFileSync(path.resolve(__dirname, './bookmarks.html'), 'utf8')

parse(data, function (err, res) {
  if (err) {
    console.log(err)
  } else {
    genJSON(res.bookmarks)
  }
})

function genJSON (bookmarks) {
  var ary = []
  getE(bookmarks, ary)
  console.log(JSON.stringify(ary))
}

function getE (bookmarks, ary) {
  if (bookmarks == null) return null
  else if (bookmarks.length > 0) {
    for (let bookmark of bookmarks) {
      let children = bookmark['children']
      let type = bookmark['type']
      let url = bookmark['url']
      if (url == null || url === 'about:addons' || !url.startsWith('javascript:') || url === 'rss' || !url.startsWith('place:')) {
        if (type === 'folder' || type === undefined) {
          if (children.length === 0 || children === null) {
            ary.push(bookmark)
          } else getE(children, ary)
        } else if (type === 'bookmark') {
          ary.push(bookmark)
        } else {
          console.log(bookmark)
        }
      } else {
        console.log(bookmark)
      }
    }
  }
}
