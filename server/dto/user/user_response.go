package usersdto

type UserResponse struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Phone   string `json:"phone"`
	Email   string `json:"email"  gorm:"type:varchar(255);unique;not null"`
	Address string `json:"address" gorm:"type: text"`
}
