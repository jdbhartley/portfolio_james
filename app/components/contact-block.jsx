import { GoArrowUpRight } from "react-icons/go";
import data from "../../data.json";
export function ContactBlock() {
  return (
    <section className="contact-band" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch</h2>
        </div>
        <div>
          <p>
            For software roles or project inquiries,
            <br className="desktop-break" /> email me or message me on LinkedIn.
          </p>
          <a className="button button-primary" href={`mailto:${data.email}`}>
            Email me <GoArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
