import { getDBConnection } from '@/lib/db'


export async function getModels({ search, sort, categorySlug, page, modelsPerPage }: { search?: string, sort?: string | null, categorySlug?: string, page: number, modelsPerPage: number }) {
    const db = await getDBConnection()

    let sql = "SELECT * FROM models"
    const whereConditions: string[] = []
    const placeholders: string[] = []


    if (search) {
        whereConditions.push("(name LIKE ? OR description LIKE ?)")
        placeholders.push(`%${search}%`, `%${search}%`)
    }

    if (categorySlug) {
        whereConditions.push("category=?")
        placeholders.push(categorySlug)
    }

    if (whereConditions.length > 0) {
        sql += " WHERE " + whereConditions.join(" AND ")
    }


    if (sort) {
        if (sort === "alpha") {
            sql += " ORDER BY name ASC"
        }
        if (sort === "popular") {
            sql += " ORDER BY likes DESC"
        }
        if (sort === "recent") {
            sql += " ORDER BY dateAdded DESC"
        }
    }


    if (page && modelsPerPage) {
        sql += " LIMIT ? OFFSET ?"
        placeholders.push(modelsPerPage.toString(), ((page - 1) * modelsPerPage).toString())
    }


    try {
        return await db.all(sql, placeholders)
    } finally {
        await db.close()
    }

}

export async function getModelById(id: string) {
    const db = await getDBConnection()
    try {
        return await db.get("SELECT * FROM models WHERE id=?", [id])
    } finally {
        await db.close()
    }
}




export async function getModelsCount({ search, categorySlug }: { search?: string, categorySlug?: string }) {
    const db = await getDBConnection()

    let sql = "SELECT COUNT(*) as count FROM models"
    const whereConditions: string[] = []
    const placeholders: string[] = []


    if (search) {
        whereConditions.push("(name LIKE ? OR description LIKE ?)")
        placeholders.push(`%${search}%`, `%${search}%`)
    }

    if (categorySlug) {
        whereConditions.push("category=?")
        placeholders.push(categorySlug)
    }

    if (whereConditions.length > 0) {
        sql += " WHERE " + whereConditions.join(" AND ")
    }

    try {
        const result = await db.get(sql, placeholders)
        return result?.count ?? 0
    } finally {
        await db.close()
    }

}