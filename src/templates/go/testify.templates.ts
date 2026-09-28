import { Template } from "../../types/template.interface.js";

export default [
    {
        title: 'CLI: run coverage',
        content: 'go test -cover ./service',
    },
    {
        title: 'Assert error text',
        content: `
    func TestSimpleDivide_WithTestify(t *testing.T) {
        err := errors.New("cannot divide by zero")

        // EqualError проверяет:
        // 1. Что err не nil
        // 2. Что err.Error() равен "cannot divide by zero"
        assert.EqualError(t, err, "cannot divide by zero")
    }
        `,
    },
    {
        title: 'Assert values are equal',
        content: `
        a := assert.New(t)
        a.Equal(1, 1)
        `
    },
    {
        title: 'Test coverage stats',
        content: `
        
        ----- in terminal:  
        go tool cover -func=cover.out

        ----- in browser: 
        go test -coverprofile=cover.out ./service
        go tool cover -html=cover.out
        
        `
    }
] as Template[];
