import Container from "react-bootstrap/Container";
import LoggedSelectSize from "../components/LoggedSelectSize";
import LoggedSelectBase from "../components/LoggedSelectBase";
import LoggedSelectProteins from "../components/LoggedSelectProtein";
import LoggedSelectIngredients from "../components/LoggedSelectIngredients";
import LoggedAddToCart from "../components/LoggedAddToCart";
import { useState } from 'react';

export default function LoggedHome() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center text-center gap-3 min-vh-100"
    >
      <h3>Create your poke!</h3>
      {step === 1 && <LoggedSelectSize onNext={nextStep} />}
      {step === 2 && <LoggedSelectBase onNext={nextStep} onBack={prevStep} />}
      {step === 3 && <LoggedSelectProteins onNext={nextStep} onBack={prevStep} />}
      {step === 4 && <LoggedSelectIngredients onNext={nextStep} onBack={prevStep} />}
      {step === 5 && <LoggedAddToCart onBack={prevStep} />}
    </Container>
  );
}
