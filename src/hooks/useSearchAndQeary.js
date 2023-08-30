import { useMemo } from "react"

export const useSearch = (posts, selectedSort) => {
    const sortedPosts = useMemo(() => {
        if(!selectedSort.length){return posts}
        return [...posts].filter((p) => p.statusExecution.toString() === selectedSort)
          //  Преобразовал в строку, других идей нет
      }, [posts, selectedSort])
     
return sortedPosts
}

export const useSearchAndQeary = (posts, selectedSort, selectedQuery) => {
    const sortedPosts = useSearch(posts, selectedSort)
   
    const queryPost = useMemo(()=>{
        return sortedPosts.filter((p)=> p.content.toLowerCase().includes(selectedQuery.toLowerCase()))
    },[posts, selectedQuery, selectedSort])

  return queryPost
}



// export const useTestHook = (posts, selectedSort, selectedQuery) => posts
//     .filter(({ statusExecution }) =>
//         selectedSort === '' ? true : selectedSort === statusExecution)
//     .filter(({ content }) => content.toLowerCase().includes(selectedQuery))
