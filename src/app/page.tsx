"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "heroImage", url: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal."},
  { id: "aboutImage", url: "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere."},
  { id: "contactImage", url: "https://images.pexels.com/photos/18429326/pexels-photo-18429326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Outdoor sign displaying Korean and Japanese dining options, providing clear guidance."}
];

const heroImage = assetMap.find(a => a.id === "heroImage")?.url || "/public/images/placeholder.webp";
const aboutImage = assetMap.find(a => a.id === "aboutImage")?.url || "/public/images/placeholder.webp";
const contactImage = assetMap.find(a => a.id === "contactImage")?.url || "/public/images/placeholder.webp";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName={'Pizzeria'} 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24"> 
        <div className="mx-auto px-4 md:px-6"> 
          <HeroBillboard 
            title="Welcome to Our Pizzeria" 
            description="Experience the best taste of Italy with our authentic pizza." 
            imageSrc={heroImage}
            buttons={[
              { text: "Order Now", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]} 
            className="bg-red-100" 
            titleClassName="text-gray-900" 
            descriptionClassName="text-gray-900" 
          /> 
        </div> 
      </div> 
      <div id="about" data-section="about" className="scroll-mt-24"> 
        <div className="mx-auto px-4 md:px-6"> 
          <SplitAbout
            imageSrc={aboutImage}
            bulletPoints={[
              { title: "Authentic Recipes", description: "We use traditional methods.", icon: "CheckCircle" },
              { title: "Fresh Ingredients", description: "Sourced locally for quality."}
            ]}
            className="bg-red-100"
            contentClassName="text-gray-900"
          /> 
        </div> 
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24"> 
        <div className="mx-auto px-4 md:px-6"> 
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for the latest updates."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe anytime."
            className="bg-red-100"
            contentClassName="text-gray-900"
          />
        </div>
      </div> 
      <div id="footer" data-section="footer" className="scroll-mt-24"> 
        <div className="mx-auto px-4 md:px-6"> 
          <FooterLogoEmphasis
            columns={[
              { items: [ { label: "Home", href: "home" }, { label: "Menu", href: "menu" } ] },
              { items: [ { label: "About", href: "about" }, { label: "Contact", href: "contact" } ] }
            ]}
            logoText="Pizzeria"
            className="bg-red-100 text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
