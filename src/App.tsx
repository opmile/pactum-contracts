import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProblemSection } from '@/components/problem-section'
import { FeaturesSection } from '@/components/features-section'
import { PermissionsSection } from '@/components/permissions-section'
import { SocialProofSection } from '@/components/social-proof-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

function App() {
  return (
    <div className="min-h-svh bg-surface-lowest text-on-surface font-body antialiased">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TrustBar />
        <ProblemSection />
        <FeaturesSection />
        <PermissionsSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
