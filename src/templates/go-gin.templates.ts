import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Get request with parameters',
        content: `
// GetTasksByIDs handles GET /log-messages
// @Summary      Get log messages
// @Description  Returns multiple log messages
// @Param containerType query string false "Container type filter"
// @Param containerID query integer false "Container id filter"
// @Param perPage query integer false "Items per page"
// @Param page query integer false "Page number"
// @Param global query boolean false "Global log messages"
// @Tags         log messages
// @Accept       json
// @Produce      json
// @Success      200      {object}   PaginatedResponse[ent.LogMessage]
// @Failure      400      {object}  map[string]string
// @Failure      500      {object}  map[string]string
// @Router       /log-messages [get]
func (h *Handler) GetLogMessages(c *gin.Context) {
	var query logMessagesQuery
	if err := c.ShouldBindQuery(&query); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
        ...


        type logMessagesQuery struct {
	ContainerType *schema.ContainerType \`form:"containerType"\`
	ContainerID   *int                  \`form:"containerID"\`
	PerPage       *int                  \`form:"perPage"\`
	Page          *int                  \`form:"page"\`
	Global        *bool                 \`form:"global"\`
}
        `
    },
	{
		title: 'Cast body to the type',
		content: `
	var req AddLongTaskSubmissionRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
		`
	}
] as Template[];