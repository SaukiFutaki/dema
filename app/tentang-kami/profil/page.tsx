import { AboutSection } from "@/components/tentang-kami/profile/about-section"
import { OrganizationStructure } from "@/components/tentang-kami/profile/organization-structure"
import { ProfilHeader } from "@/components/tentang-kami/profile/profil-header"
import { VisionMission } from "@/components/tentang-kami/profile/vision-mission"

export default  async function Page() {
  return (
     <div className="flex flex-col min-h-screen">
      {/* Header */}
      <ProfilHeader />

      {/* About Section */}
      <AboutSection />

      {/* Vision & Mission */}
      <VisionMission />

      {/* Organization Structure */}
      <OrganizationStructure />
    </div>
  )
}
