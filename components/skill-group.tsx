type SkillGroupProps = { group: { name: string; skills: string[] }; index: number };

export function SkillGroup({ group, index }: SkillGroupProps) {
  return (
    <article className="skill-group">
      <div className="skill-index">0{index + 1}</div>
      <h3>{group.name}</h3>
      <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </article>
  );
}
