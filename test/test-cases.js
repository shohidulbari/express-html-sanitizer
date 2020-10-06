const cases = {
    case_01: {
        name: "<script>i am dangerous</script>removed",
        email: "<h1>less dangerous but remove</h1>"
    },
    expected_01: {
        data: {
            name: "removed",
            email: "less dangerous but remove"
        }
    },
    case_02: {
        name: "<h1></h1>nameOK",
        email: "<h1>less dangerous but remove</h1>",
        tags: ["hello", "world", ["inner", "array", {name: "<script>Dangerous</script>removed"}]]
    },
    expected_02: {
        data: {
            name: "nameOK",
            email: "less dangerous but remove",
            tags: ["hello", "world", ["inner", "array", {name: "removed"}]]
        }
    },
    case_03: {
        name: "<h1></h1>nameOK",
        email: "<h1><h1></h1><h1>email</h1></h1>",
        tags: ["hello", "world", ["inner", "array", {name: "<script>Dangerous</script>removed"}]]
    },
    expected_03: {
        data: {
            name: "nameOK",
            email: "email",
            tags: ["hello", "world", ["inner", "array", {name: "removed"}]]
        }
    },
    case_04: {
        name: "<h1>nameOK",
        email: "email</h1>",
        tags: ["hello", "world", ["inner", "array", {name: "<script>Dangerous</script>removed"}]]
    },
    expected_04: {
        data: {
            name: "nameOK",
            email: "email",
            tags: ["hello", "world", ["inner", "array", {name: "removed"}]]
        }
    },
    case_05: {
        text: "Text before html tag<html><div><p>Hello <b>there</b></p></div></html>"
    },
    expected_05: {
        data: {
            text: "Text before html tagHello there"
        }
    },
    case_06: {
        text: "Text before div tag<div><p>Hello <b>there</b></p></div>"
    },
    expected_06: {
        data: {
            text: "Text before div tagHello there"
        }
    },
}

module.exports = cases;