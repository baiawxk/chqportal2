let demoNum = 30
let demos = []
for (let i = 0; i < demoNum; i++) {
  demos.push({
    path: `/demo/page${i + 1}`,
    title: `demo ${i + 1}`
  })
}

export default demos
