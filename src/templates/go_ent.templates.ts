import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Foreign key',
        content: `

        // Fields of the RepetitiveTaskExecution.
func (RepetitiveTaskExecution) Fields() []ent.Field {
	return []ent.Field{
		// id is automatically the primary key in Ent
		field.Int("id").
			Positive().
			Immutable(),
		field.Int("repetitive_task_id").
			Positive(),
		field.Time("execution_date"),
		field.String("comments").
			Optional().
			Nillable(),
	}
}

// Edges of the RepetitiveTaskExecution.
func (RepetitiveTaskExecution) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("repetitive_task", RepetitiveTask.Type).
			Ref("executions").
			Unique().
			Required().
			Field("repetitive_task_id"),
	}
}
`       
    },
	{
		title: 'Make query with inner join ',
		content: `
		submissions, err := r.client.LongTaskProgressSubmission.Query().
			Where(longtaskprogresssubmission.HasLongTaskProgressWith(
				longtaskprogress.LongTaskIDEQ(longTaskID),
			)).
			Order(longtaskprogresssubmission.ByID(sql.OrderDesc())).
			All(ctx)
		`,
	}
] as Template[];