import type { ReactNode } from 'react'

export type SelfRetainingRetractorSlide = {
  id: string
  src: string
  title: string
  content: ReactNode
}

/** self-retaining-retractor-1.jpg — tumne abhi text nahi diya, isliye short line only */
function RetractorImage1Placeholder() {
  return (
    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      Product-specific details for this image can be added later when you share the copy.
    </p>
  )
}

/** self-retaining-refractor-2.jpeg — tumhara poora detail yahan hai */
function RetractorImage2FullDetails() {
  return (
    <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        The Nareshsons Retractor System is a table-mounted, self-retaining surgical device designed to provide stable,
        hands-free exposure for a wide range of procedures. It is primarily used in complex operations such as abdominal,
        hepatobiliary (HPB), orthopedic, and spinal surgeries.
      </p>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Key Features</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Table-Mounted Stability:</strong> Mounts directly
            to the operating table rails, eliminating the need for surgical assistants to manually hold retractors.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Modular Design:</strong> Customizable setup with
            adjustable arms, crossbars, and a large selection of interchangeable blades to fit various patient sizes and
            anatomical needs.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Uncompromised Exposure:</strong> Low-profile blades
            and frames provide surgeons with a clear line of sight—especially beneficial in deep or complex surgical
            fields.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Precision Adjustability:</strong> Micro-adjustable and
            &quot;Quick Angle&quot; handles allow fine, stepwise changes in retraction and multi-planar positioning.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Durability:</strong> Typically manufactured from
            premium surgical-grade stainless steel or titanium—rust-proof and fully autoclavable for repeated use.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Common System Components</h4>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          A standard comprehensive set often includes the following types of instruments:
        </p>
        <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-600/50">
          <table className="w-full min-w-[280px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-600/50 dark:bg-slate-800/80">
                <th className="px-3 py-2 font-semibold text-slate-900 dark:text-white">Component type</th>
                <th className="px-3 py-2 font-semibold text-slate-900 dark:text-white">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600/60">
              <tr>
                <td className="px-3 py-2 align-top">Mounting hardware</td>
                <td className="px-3 py-2">Elite rail clamps, sterile mounts</td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">Frame parts</td>
                <td className="px-3 py-2">Bilateral crossbars (hinged), angled arms (e.g. 18&quot;, 24&quot;)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">Handles</td>
                <td className="px-3 py-2">Micro-adjustable handles, cam clip-on handles, T-handles</td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">Retractor blades</td>
                <td className="px-3 py-2">
                  Balfour (with or without lips), Kelly, malleable, Harrington (Sweetheart), Deaver, and St. Marks blades
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Specialized Applications</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Transplant &amp; oncology:</strong> Specialized
            setups for liver transplants and oncology (e.g. HIPEC &quot;Coliseum Technique&quot;) for high strength in
            long-duration surgeries.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Bariatric surgery:</strong> High-rigidity frames
            and non-slip Balfour blades for morbidly obese patients.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Spine surgery:</strong> Anterior and posterior lumbar
            systems for safe retraction of delicate structures (e.g. esophagus, trachea) during cervical procedures.
          </li>
        </ul>
      </div>
    </div>
  )
}

/** self-retaining-refractor-3.jpeg — LUNA Retractor System with Titanium Layla Arms */
function RetractorImage3LunaDetails() {
  return (
    <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        The LUNA Retractor System with Titanium Layla Arms is an advanced surgical retraction device designed to
        provide stable, precise, and hands-free tissue retraction during complex surgical procedures. It is widely used
        in neurosurgery, spinal surgery, and other delicate operations where clear visualization of the surgical field is
        essential.
      </p>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Key Features</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Titanium Layla Arms:</strong> Lightweight,
            high-strength titanium arms offer durability and flexibility while maintaining stability during surgery.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">360° Adjustable Positioning:</strong> Layla arms
            allow multi-directional movement and locking so retractors can be placed exactly where needed.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Stable Retraction Support:</strong> Holds retractors
            firmly, reducing manual assistance and improving surgical precision.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Lightweight and Ergonomic Design:</strong> Titanium
            construction keeps the system light, corrosion-resistant, and easy to handle in the operating room.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Modular System:</strong> Components assemble or
            adjust easily for different procedures.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Main Components</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Titanium Layla Arms:</strong> Flexible arms that
            hold retractors in place.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Mounting Clamp:</strong> Secures the system to the
            operating table.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Retractor Blades:</strong> Hold back tissue for
            better surgical exposure.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Adjustment Knobs and Joints:</strong> Enable precise
            positioning and locking.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Advantages</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Provides hands-free surgical exposure</li>
          <li>Improves surgical precision and visibility</li>
          <li>Reduces fatigue for surgical assistants</li>
          <li>Highly durable and sterilization-friendly material</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Typical Applications</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Neurosurgery</li>
          <li>Spinal surgery</li>
          <li>Microsurgical procedures</li>
          <li>Complex open surgery</li>
        </ul>
      </div>
    </div>
  )
}

/** self-retaining-refractor-4.jpeg — Caspar Cervical Retractor System */
function RetractorImage4CasparDetails() {
  return (
    <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        The Caspar Cervical Retractor System is a specialized surgical instrument used in cervical spine surgery. It is
        mainly designed to provide stable retraction of soft tissues and muscles during anterior cervical spine
        procedures, allowing surgeons to clearly access the vertebrae and intervertebral discs.
      </p>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Purpose</h4>
        <p className="mt-2">
          This system is commonly used during procedures such as Anterior Cervical Discectomy and Fusion (ACDF) and
          other cervical spine surgeries. It helps maintain a clear surgical field by gently holding back surrounding
          tissues.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Key Features</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Adjustable Retractor Blades:</strong> Strong, curved
            blades that can be adjusted to retract muscles and soft tissues safely.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Rack and Pinion Locking Mechanism:</strong> A toothed
            rack with a locking lever allows gradual opening of the retractor and secure fixation.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Caspar Distraction Screws:</strong> Screws inserted
            into the vertebral bodies to help stabilize and slightly distract the cervical vertebrae during surgery.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Durable Surgical Material:</strong> Medical-grade
            stainless steel for strength, durability, and repeated sterilization.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Main Components</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Retractor Frame:</strong> Holds the system and
            maintains stability.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Retractor Blades:</strong> Hold back muscles and
            tissues.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Rack with Locking Lever:</strong> Controlled opening
            and fixation.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Caspar Distraction Screws:</strong> Vertebral
            stabilization and distraction.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Advantages</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Provides excellent exposure of the cervical spine</li>
          <li>Ensures stable and controlled retraction</li>
          <li>Reduces the need for manual assistance</li>
          <li>Improves precision and safety during cervical spine surgery</li>
        </ul>
      </div>
    </div>
  )
}

export const selfRetainingRetractorSlides: SelfRetainingRetractorSlide[] = [
  {
    id: 'retractor-1',
    src: '/nareshsons/self-retaining-retractor-1.jpg',
    title: 'Self Retaining Retractor',
    content: <RetractorImage1Placeholder />,
  },
  {
    id: 'retractor-2',
    src: '/nareshsons/self-retaining-refractor-2.jpeg',
    title: 'Self Retaining Retractor System',
    content: <RetractorImage2FullDetails />,
  },
  {
    id: 'retractor-3',
    src: '/nareshsons/self-retaining-refractor-3.jpeg',
    title: 'LUNA Retractor System with Titanium Layla Arms',
    content: <RetractorImage3LunaDetails />,
  },
  {
    id: 'retractor-4',
    src: '/nareshsons/self-retaining-refractor-4.jpeg',
    title: 'Caspar Cervical Retractor System',
    content: <RetractorImage4CasparDetails />,
  },
]
