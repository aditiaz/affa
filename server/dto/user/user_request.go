package usersdto

type UserRequest struct {
	Name    string `json:"name"`
	Phone   string `json:"phone"`
	Email   string `json:"email"  gorm:"type:varchar(255);unique;not null"`
	Address string `json:"address" gorm:"type: text"`
}

type UpdateUserRequest struct {
	Name    string `json:"name"`
	Phone   string `json:"phone"`
	Email   string `json:"email"  gorm:"type:varchar(255);unique;not null"`
	Address string `json:"address" gorm:"type: text"`
}
