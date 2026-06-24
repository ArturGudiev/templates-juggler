import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Foreign key',
        content: `

type RepetitiveTask struct {
	ent.Schema
}

// Fields of the RepetitiveTask.
func (RepetitiveTask) Fields() []ent.Field {
	return []ent.Field{
	   ...
	}
}

// Edges of the RepetitiveTask.
func (RepetitiveTask) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("executions", RepetitiveTaskExecution.Type),
	}
}
//-----------------------------------------------------------------

        // Fields of the RepetitiveTaskExecution.
func (RepetitiveTaskExecution) Fields() []ent.Field {
	return []ent.Field{
		...
		field.Int("repetitive_task_id").
			Positive(),
		...
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
	},
	{
		title: "Value is one of predefined values",
		content: `
		stateRequirements, err := r.client.StateRequirement.Query().Where(staterequirement.IDIn(IDs...)).All(ctx)
		`
	},
	{
		title: "Declare an instance of struct type",
		content: `
		var stateRequirement = &ent.StateRequirement{
			ID: ID,
			Name: Name,
			Description: Description,
			CreatedAt: CreatedAt,
			UpdatedAt: UpdatedAt,
		}
		`
	}
] as Template[];