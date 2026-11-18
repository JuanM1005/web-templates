import { useState } from "react";
import { plans } from "./data";

type Billing = "monthly" | "yearly";

const amount = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export function Pricing({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="frame section-space" id="planes" aria-labelledby="pricing-title">
      <div className="pricing-header">
        <div>
          <h2 id="pricing-title" className="section-title">Planes para cada equipo.</h2>
          <p className="section-copy">Precios de ejemplo en MXN por persona.</p>
        </div>
        <fieldset className="billing">
          <legend className="sr-only">Periodo de facturación</legend>
          <label><input type="radio" name="billing" checked={billing === "monthly"} onChange={() => setBilling("monthly")} /> <span>Mensual</span></label>
          <label><input type="radio" name="billing" checked={billing === "yearly"} onChange={() => setBilling("yearly")} /> <span>Anual</span></label>
        </fieldset>
      </div>
      <p className="sr-only" role="status">{billing === "monthly" ? "Se muestran precios mensuales." : "Se muestran equivalentes mensuales y totales anuales."}</p>
      <ul className="plans">
        {plans.map((plan) => (
          <li className="plan" data-featured={plan.featured} key={plan.name}>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <p className="price"><strong>{amount.format(plan[billing])}</strong> / mes</p>
            <p className="billing-note">
              {plan.monthly === 0 ? "Gratis" : billing === "yearly" ? `${amount.format(plan.yearly * 12)} MXN por año` : "Facturación mensual"}
            </p>
            <ul className="plan-features">
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a className={plan.featured ? "button button-primary" : "button button-outline"} href="#contacto" onClick={() => onSelectPlan(plan.name)}>
              Consultar {plan.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
