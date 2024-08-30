import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                        src="/images/woli-logoazul.png"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa Woli"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a 
                        href="https://www.linkedin.com/company/woli"
                        target="_blank"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                    >
                        @ Woli
                    </a>
                    <h4 className="text-gray-300">Web Design Júnior</h4>
                    <span className="text-gray-500">
                        nov 2020 • 2024 • (3 anos e 10 meses)
                    </span>
                    <p className="text-gray-400">
                        Desenvolvimento de telas de cursos interativas com HTML, CSS, e JavaScript. Implementação de interfaces responsivas e dinâmicas, focadas na experiência do usuário (UX) e UI Design. Colaboração com designers para transformar requisitos em soluções digitais funcionais e atraentes. 
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="HTML" />
                    <TechBadge name="HTML" />
                    <TechBadge name="HTML" />
                    <TechBadge name="HTML" />
                    <TechBadge name="HTML" />
                    <TechBadge name="HTML" />
                </div>
                
            </div>
        </div>
    )
}