import ScaleAnimate from "../Animations/ScaleAnimate";
import Badge from "../UI/Badge";
import Card from "./Card";

interface Props {
  icon: React.ReactNode;
  badgeData?: string;
  animate?: boolean;
}

const Iconcard: React.FC<Props> = ({ badgeData, icon, animate }) => {
  let component: React.ReactNode;

  if (animate) {
    component = (
      <Card className="bg-tertiary cursor-pointer">
        <ScaleAnimate>
          <span>{icon}</span>
          {badgeData && (
            <span className="absolute top-0 mt-1.5 right-0 mr-1.5">
              <Badge info={badgeData} />
            </span>
          )}
        </ScaleAnimate>
      </Card>
    );
  } else {
    component = (
      <Card className="bg-tertiary cursor-pointer">
        <span>{icon}</span>
        {badgeData && (
          <span className="absolute top-0 mt-1.5 right-0 mr-1.5">
            <Badge info={badgeData} />
          </span>
        )}
      </Card>
    );
  }

  return <>{component}</>;
};

export default Iconcard;
