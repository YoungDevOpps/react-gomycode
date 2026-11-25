import { useState, type CSSProperties } from "react";
import Card from "react-bootstrap/Card";
import type { PlayerData } from "../data/players";
import { Hash } from "lucide-react";

export type PlayerProps = Partial<PlayerData>;

// Valeurs par défaut de chaque attribut
const defaultProps: PlayerData = {
  name: "Inconnu",
  team: "Sans club",
  nationality: "Inconnue",
  countryCode: "un",
  jerseyNumber: 0,
  age: 0,
  image: "https://placehold.co/300x300/e9cc74/5a4a14?text=Joueur",
  rating: 50,
  position: "--",
  stats: { pac: 50, sho: 50, pas: 50, dri: 50, def: 50, phy: 50 },
};

const GOLD_DARK = "#5a4a14";

// Style commun aux deux faces. La forme (blason aux coins arrondis) est appliquée sur chaque
// face car clip-path sur le conteneur casserait l'effet 3D. Tracé calculé pour 280x400 px.
const faceStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  border: "none",
  color: GOLD_DARK,
  background: "linear-gradient(160deg, #f6e08f 0%, #e3c25c 60%, #cfa93f 100%)",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

const Player = (props: PlayerProps) => {
  // Déstructuration de tous les attributs, avec les valeurs par défaut
  const {
    name,
    team,
    nationality,
    countryCode,
    jerseyNumber,
    age,
    image,
    rating,
    position,
    stats,
  } = { ...defaultProps, ...props };

  const [flipped, setFlipped] = useState(false);

  const statRows: [string, number][] = [
    ["PAC", stats.pac],
    ["SHO", stats.sho],
    ["PAS", stats.pas],
    ["DRI", stats.dri],
    ["DEF", stats.def],
    ["PHY", stats.phy],
  ];

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-label={`Retourner la carte de ${name}`}
      style={{
        width: "280px",
        height: "400px",
        perspective: "1000px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "none",
        }}
      >
        {/* Face avant */}
        <Card style={faceStyle} className="card-face-clip">
          {/* Colonne gauche : note, poste, drapeau */}
          <div
            style={{
              position: "absolute",
              top: "48px",
              left: "30px",
              textAlign: "center",
              lineHeight: 1,
              width: "60px",
            }}
            className="flex flex-col items-center justify-center"
          >
            <div style={{ fontSize: "36px", fontWeight: 700 }}>{rating}</div>
            <div
              style={{ fontSize: "16px", fontWeight: 700, marginTop: "4px" }}
            >
              {position}
            </div>
            <hr style={{ margin: "8px 0", opacity: 0.4 }} />
            <img
              src={`https://flagcdn.com/w40/${countryCode}.png`}
              alt={nationality}
              title={nationality}
              style={{ width: "30px", borderRadius: "2px" }}
            />
            <div style={{ fontSize: "9px", marginTop: "6px", fontWeight: 600 }}>
              {team}
            </div>
          </div>

          {/* Photo */}
          <img
            src={image}
            alt={name}
            style={{
              position: "absolute",
              top: "36px",
              right: "20px",
              width: "150px",
              height: "150px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          {/* Nom + infos */}
          <div
            style={{
              position: "absolute",
              top: "198px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {name}
            </div>
            <div
              style={{ fontSize: "11px", opacity: 0.8 }}
              className="flex items-center justify-center"
            >
              <Hash size={14} /> {jerseyNumber} - {age} ans
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              position: "absolute",
              top: "258px",
              left: 0,
              right: 0,
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "auto auto",
              gridAutoFlow: "column",
              gridTemplateRows: "repeat(3, auto)",
              columnGap: "28px",
              rowGap: "4px",
              fontSize: "16px",
            }}
          >
            {statRows.map(([label, value]) => (
              <div key={label}>
                <strong>{value}</strong> {label}
              </div>
            ))}
          </div>
        </Card>

        {/* Face arrière : fiche complète */}
        <Card
          style={{ ...faceStyle, transform: "rotateY(180deg)" }}
          className="card-face-clip"
        >
          <div style={{ padding: "48px 36px 0", textAlign: "center" }}>
            <img
              src={`https://flagcdn.com/w40/${countryCode}.png`}
              alt={nationality}
              style={{ width: "30px", borderRadius: "2px" }}
            />
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {name}
            </div>
            <div style={{ fontSize: "13px", marginBottom: "10px" }}>
              {rating} - {position}
            </div>
            <div
              style={{ textAlign: "left", fontSize: "13px", lineHeight: 1.7 }}
            >
              <div>
                <strong>Équipe :</strong> {team}
              </div>
              <div>
                <strong>Nationalité :</strong> {nationality}
              </div>
              <div>
                <strong>Numéro :</strong> #{jerseyNumber}
              </div>
              <div>
                <strong>Âge :</strong> {age} ans
              </div>
            </div>
            <div style={{ marginTop: "10px", textAlign: "left" }}>
              {statRows.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "11px",
                  }}
                >
                  <span style={{ width: "28px", fontWeight: 700 }}>
                    {label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: "6px",
                      background: "rgba(90,74,20,0.2)",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        width: `${value}%`,
                        height: "100%",
                        background: GOLD_DARK,
                        borderRadius: "3px",
                      }}
                    />
                  </div>
                  <span style={{ width: "20px", textAlign: "right" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Player;
