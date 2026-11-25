import {
  Globe, ShoppingCart, LayoutDashboard, Wrench,
  MessageSquare, PenTool, Code2, Rocket,
  Utensils, Stethoscope, Boxes, Shirt, GraduationCap, Car,
  type LucideIcon,
} from "lucide-react"

export const identity = {
  name: "Tangara Yves Ibrahim",
  nickname: "Chanslord",
  email: "tangaraayves@mail.com",
  phone: "07 786 308 89",
  phoneHref: "tel:+2250778630889",
  location: "Adjamé Williamsville, Abidjan, Côte d'Ivoire",
}

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
]

export const stats = [
  { value: 4, suffix: " ans", label: "d'expérience en entreprise" },
  { value: 6, suffix: "", label: "familles de technologies" },
  { value: 48, suffix: " h", label: "pour recevoir une réponse" },
]

export const techs = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "PHP",
  "MySQL", "WordPress", "Bootstrap", "jQuery", "SQL Server", "WinDev",
]

export const services: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Globe, title: "Site vitrine", text: "Une présence en ligne claire et rapide pour présenter votre activité et être contacté facilement." },
  { icon: ShoppingCart, title: "Boutique en ligne", text: "Catalogue, panier et suivi des commandes pour vendre vos produits à toute heure." },
  { icon: LayoutDashboard, title: "Application sur mesure", text: "Gestion de stock, de clients ou de rendez-vous : un outil adapté à votre façon de travailler." },
  { icon: Wrench, title: "Maintenance et support", text: "Mises à jour, corrections et assistance pour que votre site reste fiable dans le temps." },
]

export type Category = "Site vitrine" | "E-commerce" | "Application"

export const projects: {
  title: string; category: Category; text: string; stack: string[]
  icon: LucideIcon; hue: number
}[] = [
  { title: "Maquis Express", category: "E-commerce", text: "Commande de repas en ligne avec choix du créneau de retrait et suivi en cuisine.", stack: ["React", "PHP", "MySQL"], icon: Utensils, hue: 40 },
  { title: "Clinique Santé Plus", category: "Site vitrine", text: "Site de clinique avec présentation des services et prise de rendez-vous en ligne.", stack: ["HTML", "Tailwind", "JavaScript"], icon: Stethoscope, hue: 200 },
  { title: "StockPro", category: "Application", text: "Tableau de bord de gestion de stock avec alertes de rupture et historique des mouvements.", stack: ["React", "PHP", "MySQL"], icon: Boxes, hue: 265 },
  { title: "Wax Abidjan", category: "E-commerce", text: "Boutique de tissus et vêtements avec paiement mobile et gestion des livraisons.", stack: ["WordPress", "WooCommerce"], icon: Shirt, hue: 15 },
  { title: "École Horizon", category: "Application", text: "Portail où les parents consultent notes, absences et factures de scolarité.", stack: ["React", "SQL Server"], icon: GraduationCap, hue: 150 },
  { title: "Taxi Ivoire", category: "Site vitrine", text: "Page de présentation d'une société de transport avec calcul d'un tarif estimatif.", stack: ["HTML", "CSS", "JavaScript"], icon: Car, hue: 90 },
]

export const steps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: MessageSquare, title: "On échange", text: "Vous me présentez votre activité et votre besoin. Je pose les bonnes questions et vous envoie un devis clair." },
  { icon: PenTool, title: "Je dessine", text: "Vous validez une maquette avant que la moindre ligne de code ne soit écrite." },
  { icon: Code2, title: "Je développe", text: "Vous suivez l'avancement et testez des versions intermédiaires. Je corrige selon vos retours." },
  { icon: Rocket, title: "Je livre et j'accompagne", text: "Mise en ligne, prise en main et assistance après la livraison." },
]

export const skillGroups: { id: string; label: string; skills: { name: string; value: number }[] }[] = [
  { id: "langages", label: "Langages", skills: [
    { name: "HTML / CSS", value: 90 }, { name: "JavaScript", value: 82 }, { name: "PHP", value: 78 }, { name: "WLangage", value: 70 } ] },
  { id: "frameworks", label: "Frameworks", skills: [
    { name: "React", value: 75 }, { name: "Tailwind CSS", value: 85 }, { name: "Bootstrap", value: 88 }, { name: "jQuery", value: 80 } ] },
  { id: "donnees", label: "Données", skills: [
    { name: "MySQL", value: 85 }, { name: "SQL Server", value: 75 }, { name: "HFSQL", value: 72 } ] },
  { id: "cms", label: "CMS", skills: [
    { name: "WordPress", value: 85 }, { name: "E-monsite", value: 78 } ] },
  { id: "systemes", label: "Systèmes", skills: [
    { name: "Windows", value: 88 }, { name: "Administration réseau", value: 75 }, { name: "Support technique", value: 90 } ] },
]

export const experiences = [
  { role: "Responsable informatique", company: "DM COMPANY", period: "Jan. 2023 – aujourd'hui", current: true,
    tasks: ["Développement et maintenance de sites web et d'applications métiers", "Administration des systèmes et du réseau local", "Assistance des équipes sur les logiciels du quotidien"] },
  { role: "Assistant informatique", company: "DM COMPANY", period: "Mai 2022 – Jan. 2023", current: false,
    tasks: ["Développement web pour l'entreprise et ses clients", "Support technique et administration système", "Administration réseau"] },
]

export const education = {
  title: "Licence professionnelle en informatique, développement d'applications",
  school: "PIGIER Côte d'Ivoire",
  period: "2016 – 2020",
}

export const qualities = ["Rigueur", "Curiosité", "Esprit critique", "Intégrité", "Ponctualité", "Adaptabilité"]
