


export async function getQueryParams({ searchParams }: { searchParams: Promise<{ search?: string, sort?: string, page?: string }> | { search?: string, sort?: string, page?: string } }) {
    const resolvedSearchParams = await searchParams
    const search = resolvedSearchParams?.search?.trim().toLowerCase() || ''




    const rawSort = (await searchParams)?.sort?.toLowerCase()
    let sort
    if (rawSort == undefined) {
        sort = ''
    } else {
        if (rawSort == 'alpha' || rawSort == 'popular' || rawSort == 'recent') {
            sort = rawSort
        } else {
            sort = null;
        }
    }

    const rawPage = (await searchParams)?.page?.trim()
    let page
    if (rawPage == undefined) {
        page = 1
    } else {
        page = Number(rawPage)
        if (Number.isNaN(page) || page < 1) {
            page = 0
        }

    }



    return { search, sort, page }
}