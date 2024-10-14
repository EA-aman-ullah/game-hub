import useData from "./useData"

interface Platfrom {
    id: number
    name: string
    slug: string
}

const usePlatform = () => useData<Platfrom>("/platforms/lists/parents")

export default usePlatform