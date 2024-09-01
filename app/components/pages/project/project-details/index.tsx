import { SectionTitle } from "@/app/components/section-title"

export const ProjectDetails = () => {
    return(
        <section className="w-ful sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div 
                className="absolute inset-0 z-[-1]"
                style={{
                    background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw) no-repeat center/cover'
                }}
            />

            <SectionTitle 
                subtitle="projetos" 
                title="BookWise" 
                className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js.
            </p>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center jusitfy-center"></div>
        </section>
    )
}