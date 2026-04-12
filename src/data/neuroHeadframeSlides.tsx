import type { ImageTextDetailSlide } from '../components/ImageTextDetailModal'

export type NeuroHeadframeSlide = ImageTextDetailSlide & { id: string }

function ThreePinContent() {
  return (
    <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        A three-pin head frame, commonly known in neurosurgery as a Nareshsons skull clamp or three-point cranial
        fixation device, is a standardized surgical tool used to rigidly immobilize a patient&apos;s head during
        neurosurgical procedures. It features a &quot;C&quot; shaped arm with three specialized, sharpened
        pins—typically one on one side and two on a swivelling &quot;rocker&quot; on the other—that penetrate the outer
        table of the skull to ensure absolute stability.
      </p>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Key Features and Components</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Three-Point Fixation:</strong> Ensures balanced,
            distributed pressure on the skull, minimizing risks of slippage (which occurs in 10–15% of cases if
            improperly applied) and reducing potential for pressure-related complications.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Swivelling C-Arm:</strong> Allows surgeons to position
            pins to avoid critical areas such as nerves, vessels, or thin bone, particularly in the temporal region.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Material:</strong> Usually constructed from high-end
            aluminium alloy or stainless steel for durability.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Interchangeable Pins:</strong> The cones (often
            34° to 38° angles) come in adult, adolescent, and paediatric sizes and are removable for sterilization.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Adjustability:</strong> Features a ratchet mechanism
            for width adjustment and a locking knob for securing the position.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Compatibility:</strong> Designed to work with operating
            tables, including for sitting, prone, or supine positions.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Applications in Neurosurgery</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Brain Surgeries:</strong> Used for open and
            percutaneous craniotomies.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Stereotactic Radiosurgery (GK-SRS):</strong> Used to
            guide and hold the head stable during Gamma Knife procedures, sometimes using 3-pin setups to avoid collision
            with equipment.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Spine Surgery:</strong> Used in cases requiring strict
            cervical spine stabilization.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Posterior Fossa/Occipital Procedures:</strong>{' '}
            Commonly used in 3/4 prone positions.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Safety and Optimization</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Safe Pinning Zones:</strong> Proper application
            requires using the &quot;safe pinning zone&quot; (identified by Raabe et al.) to prevent complications like
            skull fractures, dural lacerations, or epidural hematomas.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Proper Pressure:</strong> Pinning pressure must be
            carefully managed, often using a 50°/25° configuration to ensure uniform penetration.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Sterilization:</strong> The devices are generally
            autoclave and Ethylene Oxide (ETO) friendly.
          </li>
        </ul>
      </div>
    </div>
  )
}

function FourPinContent() {
  return (
    <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
      <p>
        A four-pin head frame, such as the Nareshsons head holder, is a specialized neurosurgical device used to
        immobilize the skull rigidly during surgery. It utilizes four adjustable pins to provide stable fixation for
        craniotomy and spine procedures in positions including supine, prone, and sitting. These devices are often made
        of stainless steel or titanium for durability and compatibility with imaging, and they allow for precision
        adjustment to ensure patient safety and optimal surgical access.
      </p>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Key Features and Aspects of Four-Pin Head Frames</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Stability and Flexibility:</strong> Offers superior
            stabilization during complex neurosurgical and radiation therapy procedures.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Design:</strong> Usually features a lightweight
            semicircular or complete frame with four sharp, adjustable, sterile stainless-steel pins.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Compatibility:</strong> Designed to work with various
            operating table (OT) setups, often including interfaces for self-retaining brain retractors (SRBR).
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Pin Material/Pressure:</strong> Uses high-grade
            stainless steel (e.g., SUS316L) with screw mechanisms that can be tightened to specific pressures to hold the
            skull securely.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Applications:</strong> Essential for preventing
            movement during delicate brain and spinal procedures, including those requiring sitting positions.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">Clinical Considerations</h4>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Positioning:</strong> Pin placement must be carefully
            calculated, often near the sweatband area to prevent injury.
          </li>
          <li>
            <strong className="text-slate-800 dark:text-slate-200">Risks:</strong> Potential complications, though rare,
            include pin-site infections, scalp lacerations, skull fractures, and, in some cases, venous air embolism.
          </li>
        </ul>
      </div>
    </div>
  )
}

export const neuroHeadframeSlides: NeuroHeadframeSlide[] = [
  {
    id: 'three-pin-head-frame',
    src: '/nareshsons/neuro-surgical-headframes-1.webp',
    title: 'Three Pin Head Frame',
    content: <ThreePinContent />,
  },
  {
    id: 'four-pin-head-frame',
    src: '/nareshsons/neuro-surgical-headframes-2.png',
    title: 'Four Pin Head Frame',
    content: <FourPinContent />,
  },
]
