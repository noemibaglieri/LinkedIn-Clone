import React from "react";
import { Gear, InfoCircle, QuestionCircle } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer className="mt-5 text-muted py-4">
      <div className="container">
        <div className="row gy-4">
          {/* Colonna 1 */}
          <div className="col-6 col-md-2">
            <ul className="list-unstyled">
              <li>
                <a href="#">Informazioni</a>
              </li>
              <li>
                <a href="#">Informativa sulla community professionale</a>
              </li>
              <li>
                <a href="#">Privacy e condizioni</a>
              </li>
              <li>
                <a href="#">Sales solutions</a>
              </li>
              <li>
                <a href="#">Centro sicurezza</a>
              </li>
            </ul>
          </div>

          {/* Colonna 2 */}
          <div className="col-6 col-md-2">
            <ul className="list-unstyled">
              <li>
                <a href="#">Accessibilità</a>
              </li>
              <li>
                <a href="#">Carriera</a>
              </li>
              <li>
                <a href="#">Opzione per gli annunci pubblicitari</a>
              </li>

              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
          </div>

          {/* Colonna 3 */}
          <div className="col-6 col-md-2">
            <ul className="list-unstyled">
              <li>
                <a href="#">Talent solutions</a>
              </li>

              <li>
                <a href="#">Soluzioni di marketing</a>
              </li>

              <li>
                <a href="#">Pubblicità</a>
              </li>
              <li>
                <a href="#">Piccole imprese</a>
              </li>
            </ul>
          </div>

          {/* Colonna 4 */}
          <div className="col-12 col-md-3">
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start gap-2">
                <QuestionCircle className="fs-5 icon-grey" />
                <div>
                  <strong>Domande?</strong>
                  <br />
                  <a href="#">Visita il nostro Centro assistenza.</a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start gap-2">
                <Gear className="fs-5 icon-grey" />
                <div>
                  <strong>Gestisci il tuo account e la tua privacy</strong>
                  <br />
                  <a href="#">Vai alle impostazioni</a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-2">
                <InfoCircle className="fs-5 icon-grey" />
                <div>
                  <strong>Trasparenza sui contenuti consigliati</strong>
                  <br />
                  <a href="#">Scopri di più sui contenuti consigliati.</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Colonna 5 */}
          <div className="col-12 col-md-3">
            <label htmlFor="language-select" className="form-label fw-bold">
              Seleziona lingua
            </label>
            <select id="language-select" className="form-select w-100">
              <option value="it">Italiano (Italiano)</option>
              <option value="en">English (English)</option>
              <option value="fr">Français (Français)</option>
              <option value="de">Deutsch (Deutsch)</option>
              <option value="es">Español (Español)</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-4 small text-secondary">LinkedIn Corporation © 2025</div>
      </div>
    </footer>
  );
};

export default MyFooter;
