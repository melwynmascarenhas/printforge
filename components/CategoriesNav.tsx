import NavLink from '@/components/NavLink'
import { getCategories } from '@/lib/controllers/categories'

export default async function CategoriesNav() {
  const categories = await getCategories()
  return (
    <aside
      className="sticky top-0 z-10 w-full bg-white border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
      <div className="relative">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">

            <NavLink href="/3d-models" exact>All</NavLink>
            {
              categories.map((category) => (
                <NavLink key={category.name} href={`/3d-models/categories/${category.slug}`} exact>
                  {category.name}
                </NavLink>
              ))
            }
          </ul>
        </nav>
        <div
          className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
      </div>
    </aside>
  )
}