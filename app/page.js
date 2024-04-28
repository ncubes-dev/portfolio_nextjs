

import Intro from "@/app/components/intro"
import Skills from "@/app/skills/page"
import Services from "@/app/services/page"
import Footer from "@/app/components/footer"
import Contacts from "@/app/contacts/page"
import Platforms from "@/app/platforms/page"

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col justify-between">
      <section>
        <div className="container mx-auto ">
          <Intro />
        </div>
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Platforms />
      </section>
      <section>
        <Contacts />
      </section>

      <section className='bg-mediumBlue w-full h-100 mt-20'>
        <Footer />
      </section>
    </main>
  );
}
