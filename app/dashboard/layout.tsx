import { Sidebar } from "@/components/sidebar"
import { Navigator } from "@/components/navigator"
export default function DashboardLayout({children}:{children:React.ReactNode}){
    return (
        <section>
            {/** include shared UI */}
            <Sidebar/>
            <Navigator/>

            {children}
        </section>
    )
}