import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    background: #0a0a23;
    color: #fff;
    overflow-x: hidden;
  }
  * { box-sizing: border-box; }
  a { color: inherit; text-decoration: none; }
`;

// Styled Components
const Section = styled.section`
  padding: 80px 0;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(120deg, #0a0a23 60%, #1a1a40 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(90deg, #00ffe7 30%, #6a82fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin: 30px 0 40px 0;
  color: #b3b3ff;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(90deg, #00ffe7 0%, #6a82fb 100%);
  color: #0a0a23;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 40px;
  box-shadow: 0 8px 32px rgba(0,255,231,0.15);
  transition: background 0.3s, transform 0.2s;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #6a82fb 0%, #00ffe7 100%);
    transform: translateY(-3px) scale(1.04);
  }
`;

const HeroBg = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 60vw;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
  opacity: 0.18;
  z-index: 1;
  filter: blur(2px);
`;

// Slider Section
const SliderSection = styled(Section)`
  background: #10102a;
`;

const SliderTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(90deg, #00ffe7 30%, #6a82fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ImageSlider = styled.div`
  .slick-slide img {
    border-radius: 18px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.18);
    width: 100%;
    height: 320px;
    object-fit: cover;
  }
`;

// Services Section
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  margin-top: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: #18183a;
  border-radius: 18px;
  padding: 36px 28px;
  box-shadow: 0 2px 24px rgba(0,255,231,0.07);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 40px rgba(0,255,231,0.18);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 18px;
  color: #00ffe7;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ServiceDesc = styled.p`
  color: #b3b3ff;
  font-size: 1rem;
`;

// Stats Section
const StatsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const StatCard = styled(motion.div)`
  flex: 1;
  min-width: 180px;
  background: #18183a;
  border-radius: 18px;
  padding: 32px 0;
  text-align: center;
  margin: 0 8px;
`;

const StatNumber = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00ffe7 30%, #6a82fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  color: #b3b3ff;
  font-size: 1.1rem;
  margin-top: 10px;
`;

// Testimonials Section
const TestimonialCard = styled(motion.div)`
  background: #18183a;
  border-radius: 18px;
  padding: 32px 28px;
  box-shadow: 0 2px 24px rgba(0,255,231,0.07);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 18px;
`;

const TestimonialAuthor = styled.div`
  font-weight: 700;
  color: #00ffe7;
  font-size: 1rem;
`;

const TestimonialRole = styled.div`
  color: #b3b3ff;
  font-size: 0.95rem;
`;

// Contact Section
const ContactForm = styled.form`
  background: #18183a;
  border-radius: 18px;
  padding: 40px 32px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 2px 24px rgba(0,255,231,0.07);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 8px;
  border: none;
  background: #23234a;
  color: #fff;
  font-size: 1rem;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 14px 16px;
  border-radius: 8px;
  border: none;
  background: #23234a;
  color: #fff;
  font-size: 1rem;
  outline: none;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 16px 0;
  background: linear-gradient(90deg, #00ffe7 0%, #6a82fb 100%);
  color: #0a0a23;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: linear-gradient(90deg, #6a82fb 0%, #00ffe7 100%);
    transform: translateY(-2px) scale(1.03);
  }
`;

// Footer
const Footer = styled.footer`
  background: #10102a;
  color: #b3b3ff;
  text-align: center;
  padding: 32px 0 18px 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

// Data
const sliderImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
];

const services = [
  {
    icon: "🤖",
    title: "AI Strategy & Consulting",
    desc: "Unlock your business potential with tailored AI roadmaps, workshops, and expert guidance.",
  },
  {
    icon: "🧠",
    title: "Custom AI Solutions",
    desc: "From chatbots to predictive analytics, we build bespoke AI products that drive results.",
  },
  {
    icon: "📈",
    title: "Data Science & Insights",
    desc: "Transform raw data into actionable insights with advanced analytics and machine learning.",
  },
  {
    icon: "🌐",
    title: "AI-Powered Web & Apps",
    desc: "Next-gen websites and apps with integrated AI for automation, personalization, and more.",
  },
];

const stats = [
  { number: 120, label: "AI Projects Delivered" },
  { number: 30, label: "Enterprise Clients" },
  { number: 15, label: "Awards Won" },
  { number: 98, label: "Client Satisfaction (%)" },
];

const testimonials = [
  {
    text: "Wall Media transformed our business with their AI expertise. The results were beyond our expectations.",
    author: "Sarah Lee",
    role: "CTO, FinTech Corp",
  },
  {
    text: "Their team delivered a custom AI solution that automated our workflow and saved us hundreds of hours.",
    author: "James Carter",
    role: "COO, HealthAI",
  },
  {
    text: "Professional, innovative, and always ahead of the curve. Highly recommended for any AI project.",
    author: "Priya Singh",
    role: "CEO, RetailX",
  },
];

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const statAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" },
  }),
};

function App() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  // Animated stats
  const [statValues, setStatValues] = React.useState(stats.map(() => 0));
  React.useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      let current = 0;
      const increment = Math.ceil(stat.number / 40);
      return setInterval(() => {
        setStatValues((prev) => {
          const updated = [...prev];
          if (updated[idx] < stat.number) {
            updated[idx] = Math.min(updated[idx] + increment, stat.number);
          }
          return updated;
        });
      }, 30);
    });
    setTimeout(() => intervals.forEach(clearInterval), 1300);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* Hero Section */}
      <Hero>
        <Container>
          <HeroContent>
            <HeroTitle
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
            >
              Wall Media 

              <span style={{ fontWeight: 400, fontSize: "2.2rem", color: "#b3b3ff" }}>
                AI Agency for the Next Generation
              </span>
            </HeroTitle>
            <HeroSubtitle
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
            >
              We design, build, and launch world-class AI solutions that transform businesses and empower people.
            </HeroSubtitle>
            <CTAButton
              href="#contact"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              whileHover={{ scale: 1.07 }}
            >
              Get Started
            </CTAButton>
          </HeroContent>
        </Container>
        <HeroBg
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 0.18, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
      </Hero>

      {/* Slider Section */}
      <SliderSection>
        <Container>
          <SliderTitle>Our Work</SliderTitle>
          <ImageSlider>
            <Slider {...sliderSettings}>
              {sliderImages.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt={`Wall Media project ${idx + 1}`} />
                </div>
              ))}
            </Slider>
          </ImageSlider>
        </Container>
      </SliderSection>

      {/* Services Section */}
      <Section id="services">
        <Container>
          <SliderTitle>What We Do</SliderTitle>
          <ServicesGrid>
            {services.map((service, idx) => (
              <ServiceCard
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={idx + 1}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDesc>{service.desc}</ServiceDesc>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <StatsGrid>
            {stats.map((stat, idx) => (
              <StatCard
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statAnim}
                custom={idx + 1}
              >
                <StatNumber>
                  {statValues[idx]}
                  {stat.label.includes("%") ? "%" : ""}
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section style={{ background: "#10102a" }}>
        <Container>
          <SliderTitle>What Our Clients Say</SliderTitle>
          <Slider {...testimonialSettings}>
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={t.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={idx + 1}
              >
                <TestimonialText>“{t.text}”</TestimonialText>
                <TestimonialAuthor>{t.author}</TestimonialAuthor>
                <TestimonialRole>{t.role}</TestimonialRole>
              </TestimonialCard>
            ))}
          </Slider>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Container>
          <SliderTitle>Contact Us</SliderTitle>
          <ContactForm
            onSubmit={e => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
          >
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="How can we help you?" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </Container>
      </Section>

      {/* Footer */}
      <Footer>
        &copy; {new Date().getFullYear()} Wall Media. All rights reserved. | AI Agency
      </Footer>
    </>
  );
}

export default App;