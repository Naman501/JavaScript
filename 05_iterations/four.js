const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} shortcut id for ${myObject[key]}`);
    }

    const programming = ["JS","java","ruby","cpp","py"]

    for (const key in programming) {
        console.log(programming[key]);
    }

//     const map = new Map()
// map.set('IN',"India")
// map.set('FR',"France")
// map.set('USA',"United States Of America")
// map.set('IN',"India")

// for (const key in map) {
//    console.log(key);
// }

//map non-iterable hota hai

