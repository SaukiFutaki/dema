/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import {
  BookIcon,
  CalendarIcon,
  FileQuestionIcon,
  FileTextIcon,
  FormInput,
  GraduationCapIcon,
  HandshakeIcon,
  HeartIcon,
  type LucideIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PenToolIcon,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import * as React from "react";

const beritaItems: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Berita Terkini",
    href: "/berita",
    description: "Kabar terbaru seputar kegiatan dan kebijakan Desa.",
    icon: NewspaperIcon,
  },
  {
    title: "Pengumuman",
    href: "/berita/pengumuman",
    description: "Informasi penting dan pengumuman resmi dari Desa.",
    icon: MegaphoneIcon,
  },

];

const kajianItems: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Kajian Kebijakan",
    href: "/kajian/kebijakan",
    description:
      "Analisis dan telaah terhadap kebijakan kampus dan pendidikan tinggi.",
    icon: FileTextIcon,
  },
  {
    title: "Kajian Sosial Masyarakat",
    href: "/kajian/sosial",
    description: "Hasil kajian isu-isu sosial dan kemasyarakatan terkini.",
    icon: UsersIcon,
  },
  {
    title: "Riset Mahasiswa",
    href: "/kajian/riset",
    description:
      "Publikasi hasil penelitian dan riset oleh mahasiswa universitas.",
    icon: SearchIcon,
  },
];

const tentangKamiItems: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Profil Desa",
    href: "/tentang-kami/profil",
    description: "Profil lengkap Desa Losari dan sejarahnya.",
    icon: UsersIcon,
  },
  {
    title: "Struktur Organisasi",
    href: "/tentang-kami/struktur",
    description: "Struktur organisasi Desa Losari dan perangkatnya.",
    icon: HandshakeIcon,
  },
  {
    title: "Program Kerja",
    href: "/tentang-kami/program",
    description:
      "Mengenal program kerja utama BEM untuk periode kepengurusan saat ini.",
    icon: CalendarIcon,
  },
];

const kuesionerItems: {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Survey Kepuasan",
    href: "https://survei-kepuasan-desa-losari.vercel.app",
    description: "Berikan masukan dan penilaian Anda terhadap pelayanan Desa Losari.",
    icon: FormInput,
  },
  {
    title: "Aduan Masyarakat",
    href: "",
    description: "Sampaikan aduan dan masukan Anda terkait pelayanan Desa Losari.",
    icon: FileQuestionIcon,
  },
 
];

// const kegiatanItems: {
//   title: string;
//   href: string;
//   description: string;
//   icon: LucideIcon;
// }[] = [
//   {
//     title: "Event Kampus",
//     href: "/kegiatan/event",
//     description:
//       "Kegiatan dan acara yang diselenggarakan BEM di lingkungan kampus.",
//     icon: CalendarIcon,
//   },
//   {
//     title: "Pengabdian Masyarakat",
//     href: "/kegiatan/pengabdian",
//     description: "Program pengabdian dan bakti sosial di masyarakat.",
//     icon: HeartIcon,
//   },
//   {
//     title: "Pendidikan & Pelatihan",
//     href: "/kegiatan/pelatihan",
//     description:
//       "Workshop, seminar, dan pelatihan untuk pengembangan mahasiswa.",
//     icon: GraduationCapIcon,
//   },
// ];

export default function RichNavigationMenu({
  className,
}: {
  className?: string;
}) {
  const transparentTriggerStyle =
    "!bg-transparent hover:!bg-transparent text-white hover:text-gray-300 !border-0 !shadow-none !rounded-none font-medium px-4 py-2";

  return (
    <div className={cn("flex justify-center w-full", className)}>
      <NavigationMenu className="z-20">
        <NavigationMenuList>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn("cursor-pointer", transparentTriggerStyle)}
              style={{ boxShadow: "none" }}
            >
              Kajian
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <div className="grid grid-cols-3 gap-3 p-4 w-[800px] divide-x">
                <div className="col-span-2">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    Kajian BEM Universitas
                  </h6>
                  <ul className="mt-2.5 grid grid-cols-2 gap-3">
                    {kajianItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                    <ListItem
                      title="Jurnal Mahasiswa"
                      href="/kajian/jurnal"
                      icon={BookIcon}
                    >
                      Publikasi jurnal ilmiah karya mahasiswa universitas.
                    </ListItem>
                    <ListItem
                      title="Arsip Kajian"
                      href="/kajian/arsip"
                      icon={FileTextIcon}
                    >
                      Kumpulan kajian terdahulu yang telah dipublikasikan BEM.
                    </ListItem>
                  </ul>
                </div>

                <div className="pl-4">
                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                    Kajian Terpopuler
                  </h6>
                  <ul className="mt-2.5 grid gap-3">
                    {kajianItems.slice(0, 3).map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn("cursor-pointer", transparentTriggerStyle)}
              style={{ boxShadow: "none" }}
            >
              Berita
            </NavigationMenuTrigger>
            <NavigationMenuContent className="px-4 py-6">
              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Berita & Informasi
                </h6>
                <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {beritaItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                 
                  <ListItem
                    title="Galeri"
                    href="/galeri"
                    icon={FileTextIcon}
                  >
                    Dokumentasi foto dan video kegiatan Desa Losari.
                  </ListItem>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn("cursor-pointer", transparentTriggerStyle)}
              style={{ boxShadow: "none" }}
            >
              Tentang Kami
            </NavigationMenuTrigger>
            <NavigationMenuContent className="px-4 py-6">
              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Profil BEM Universitas
                </h6>
                <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {tentangKamiItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn("cursor-pointer", transparentTriggerStyle)}
              style={{ boxShadow: "none" }}
            >
              Kuesioner
            </NavigationMenuTrigger>
            <NavigationMenuContent className="px-4 py-6">
              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Kuesioner
                </h6>
                <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {kuesionerItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn("cursor-pointer", transparentTriggerStyle)}
              style={{ boxShadow: "none" }}
            >
              Kegiatan
            </NavigationMenuTrigger>
            <NavigationMenuContent className="px-4 py-6">
              <div className="pl-4">
                <h6 className="pl-2.5 font-semibold uppercase text-sm text-muted-foreground">
                  Program & Kegiatan
                </h6>
                <ul className="mt-2.5 grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {kegiatanItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                  <ListItem
                    title="Kalender Kegiatan"
                    href="/kegiatan/kalender"
                    icon={CalendarIcon}
                  >
                    Jadwal lengkap kegiatan BEM selama periode kepengurusan.
                  </ListItem>
                  <ListItem
                    title="Pendaftaran"
                    href="/kegiatan/pendaftaran"
                    icon={FileTextIcon}
                  >
                    Informasi dan formulir pendaftaran untuk berbagai kegiatan.
                  </ListItem>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          {/* <NavigationMenuItem>
            <NavigationMenuLink
              className={cn("cursor-pointer", transparentTriggerStyle)}
              style={{ boxShadow: "none" }}
              href="https://survei-kepuasan-desa-losari.vercel.app"
              target="_blank"
            >
              Survey Kepuasan
            </NavigationMenuLink>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="font-semibold tracking-tight leading-none flex items-center gap-2">
            <Icon className="h-5 w-5" />
            {title}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
