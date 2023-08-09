package routes

import (
	"affa/handlers"
	"affa/pkg/mysql"
	"affa/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	userRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerUser(userRepository)

	e.GET("/get-all-contact", h.FindUsers)
	e.GET("/get-contact/:id", h.GetUser)
	e.POST("/add-contact", h.CreateUser)
	e.PATCH("/update-contact/:id", h.UpdateUser)
	e.DELETE("/delete-contact/:id", h.DeleteUser)
}
