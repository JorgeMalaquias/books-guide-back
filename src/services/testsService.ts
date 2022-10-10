import {testsRepository} from "../repositories/testsRepository"



async function reseting(){
    await testsRepository.reseting();
}
async function seeding(){
    await testsRepository.seeding();
}

export const testsService = {
    reseting,
    seeding
}