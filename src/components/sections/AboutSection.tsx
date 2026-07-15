import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * AboutSection Component
 * Centered about section with full bio paragraphs
 */
export default function AboutSection() {
  const paragraphs = personalInfo.bio.split('\n\n').filter(Boolean);

  return (
    <SplitSection title="About" id="about" count={1}>
      <div className="text-center max-w-3xl mx-auto space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body">
            {paragraph}
          </p>
        ))}
      </div>
    </SplitSection>
  );
}
