import { getDBConnection } from '@/lib/db'

export async function getCategories() {
    const db = await getDBConnection()

    try {
        return await db.all("SELECT * FROM categories")

    } finally {
        await db.close()
    }
}

export async function getCategoryBySlug(slug: string) {
    const db = await getDBConnection()
    try {
        return await db.get("SELECT * FROM categories WHERE slug=?", [slug])
    } finally {
        await db.close()
    }
}