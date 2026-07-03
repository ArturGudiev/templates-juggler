import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Foreign key2',
		syntaxHighlightLanguage: 'go',
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
}`       
    }, 
	{
		title: 'Foreign key',
		syntaxHighlightLanguage: 'go',
		content: `
		
// RepetitiveTask holds the schema definition for the RepetitiveTask entity.
type RepetitiveTask struct {
	ent.Schema
}

// Fields of the RepetitiveTask.
func (RepetitiveTask) Fields() []ent.Field {
	return []ent.Field{
		// id is automatically the primary key in Ent
		field.Int("id").
			Positive().
			Immutable(),
		field.String("description").
			NotEmpty(),
		field.Strings("tags").
			Default([]string{}),
		field.Bool("closed").
			Default(false),
		field.String("notes").
			Default(""),
		field.Int("once_in_days").
			Optional().
			Nillable(),
		field.Int("once_in_weeks").
			Optional().
			Nillable(),
		field.Int("once_in_months").
			Optional().
			Nillable(),
	}
}

// Edges of the RepetitiveTask.
func (RepetitiveTask) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("executions", RepetitiveTaskExecution.Type),
	}
}

// ..........


// RepetitiveTaskExecution holds the schema definition for the RepetitiveTaskExecution entity.
type RepetitiveTaskExecution struct {
	ent.Schema
}

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