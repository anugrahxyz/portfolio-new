interface Activity {
  id: string;
  content: string;
  relatedPersona: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <section className="card p-4 rounded" style={{backgroundColor: "var(--card-bg)", border: `1px solid var(--card-border)`, boxShadow: `var(--card-shadow)`}}>
      <h2 className="font-semibold mb-4" style={{color: "var(--foreground)"}}>Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-3" style={{color: "var(--foreground)"}}>
            • {activity.content}
          </li>
        ))}
      </ul>
    </section>
  );
}
