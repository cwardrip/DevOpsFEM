import { FmFrontend } from "./services/frontend";
import { FmBackend } from "./services/backend"



function main() {
    new FmBackend({
        Name: "example-test",
        Product: "devops-course-test"
    })

    new FmFrontend({
        Name: "example-test",
        Product: "devops-course-test"
    })
}

main();