import { StructureHeader } from "@/components/tentang-kami/struktur/structure-header";
import { CabinetInfo } from "@/components/tentang-kami/struktur/cabinet-info";

import { DepartmentSection } from "@/components/tentang-kami/struktur/department-section";

export default function StrukturPage() {
  // Cabinet data
  const cabinetData = {
    name: "Struktur Organisasi Dan Tata Kerja Pemerintah Desa Losari",
    period: "2023-2024",
    motto: "Berkarya dalam Harmoni, Membangun Negeri",
    description:
      `
        
      `,
  };

  // Executive board data
  const executiveBoard = [
    {
      position: "Kepala Desa",
      name: "SYARIFUDIN",
      faculty: "",
      image: "/kades.png",
      quote: "Memimpin dengan integritas, melayani dengan hati.",
    },
    {
      position: "Sekretaris Desa",
      name: "DENY SULISTYO HARTANTO",
      faculty: "",
      image: "/carik.png",
      quote: "Bersama membangun desa yang inklusif dan berdaya saing.",
    },
  ];

  // Core team data
  // const coreTeam = [
  //   {
  //     position: "Sekretaris Jenderal",
  //     name: "Dian Sastrowardoyo",
  //     faculty: "Fakultas Ilmu Budaya",
  //     image:
  //       "https://images.unsplash.com/photo-1559718062-361155fad299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc3N8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     position: "Wakil Sekretaris Jenderal",
  //     name: "Reza Rahadian",
  //     faculty: "Fakultas Ilmu Sosial dan Politik",
  //     image:
  //       "https://images.unsplash.com/photo-1559718062-361155fad299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc3N8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     position: "Bendahara Umum",
  //     name: "Raisa Andriana",
  //     faculty: "Fakultas Ekonomika dan Bisnis",
  //     image:
  //       "https://images.unsplash.com/photo-1559718062-361155fad299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc3N8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     position: "Wakil Bendahara Umum",
  //     name: "Isyana Sarasvati",
  //     faculty: "Fakultas Ekonomika dan Bisnis",
  //     image:
  //       "https://images.unsplash.com/photo-1559718062-361155fad299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvc3N8ZW58MHx8MHx8fDA%3D",
  //   },
  // ];

  // Departments data
  const departments = [
    {
      name: "KASI | Kepala Seksi",
      description:
        "Bertanggung jawab dalam pengelolaan dan pengembangan program kerja di tingkat seksi.",
      members: [
        {
          position: "Kepala seksi pemerintahan",
          name: "NURHADI",
          faculty: "",
          image: "/kasi-1.png",
        },
        {
          position: "Kepala seksi pelayanan",
          name: "SUJOKO MUSLIMIN",
          faculty: "",
          image: "/kasi-2.png",
        },
        {
          position: "Kepala seksi kesejahteraan",
          name: "WATIMAH",
          faculty: "",
          image: "/kasi-3.png",
        },
      ],
    },
    {
      name: "KAUR | Kepala Urusan",
      description:
        "Bertanggung jawab dalam pengelolaan dan pembangunan wilayah urusan.",
      members: [
        {
          position: "Kepala urusan keuangan",
          name: "ARIS SURURI",
          faculty: "",
          image: "/kaur-1.png",
        },
        {
          position: "Kepala urusan umum dan perencanaan",
          name: "SAJIDIN",
          faculty: "",
          image:
            "/kaur-2.png",
        },
      
      ],
    },
  
    {
      name: "KADUS | Kepala Dusun",
      description:
        "Bertanggung jawab dalam pengelolaan dan pembangunan wilayah dusun.",
      members: [
        {
          position: "Kepala dusun bantir",
          name: "AGUNG HARIS SUPRIYANTO",
          faculty: "",
          image:
            "/yanto.png",
        },
        {
          position: "Kepala dusun kalidukuh",
          name: "AHMAD SETYO AJI JOYO SAPUTRO",
          faculty: "",
          image:
            "/aji.png",
        },
        {
          position: "Kepala dusun losari",
          name: "CIPTO KHAMDANI",
          faculty: "",
          image:
            "/cipto.png",
        },
        {
          position: "Kepala dusun kaliliseng",
          name: "NINIK MUNDARNI",
          faculty: "",
          image:
            "/ninik.png",
        },
      ],
    },
    {
      name: "Staff Teknik",
      description:
        "Bertanggung jawab dalam pengelolaan dan pemeliharaan infrastruktur teknologi informasi.",
      members: [
      
        {
          position: "Staff teknik",
          name: "DWI WULAN PRASTYOWATI",
          faculty: "",
          image:
            "/wulan.png",
        },
      ],
    },
   
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <StructureHeader />

      {/* Cabinet Info */}
      <CabinetInfo cabinetData={cabinetData} executiveBoard={executiveBoard} />

      {/* Organization Chart */}
      {/* <OrganizationChart executiveBoard={executiveBoard} coreTeam={coreTeam} /> */}

      {/* Departments */}
      {departments.map((department, index) => (
        <DepartmentSection
          key={index}
          department={department}
          // isEven={index % 2 === 0}
          isEven={false}
        />
      ))}
    </div>
  );
}
