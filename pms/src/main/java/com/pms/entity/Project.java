package com.pms.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "project")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotBlank(message = "Please enter Project Task")
	@Column
	private String projectTask;

	@NotBlank(message = "Please enter Acceptance Criteria")
	@Column
	private String acceptCriteria;

	@Column
	private String priority;

	@Column
	private String status;

	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date dueDate;

	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date createdAt;

	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date updateAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProjectTask() {
		return projectTask;
	}

	public void setProjectTask(String projectTask) {
		this.projectTask = projectTask;
	}

	public String getAcceptCriteria() {
		return acceptCriteria;
	}

	public void setAcceptCriteria(String acceptCriteria) {
		this.acceptCriteria = acceptCriteria;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdateAt() {
		return updateAt;
	}

	public void setUpdateAt(Date updateAt) {
		this.updateAt = updateAt;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", projectTask=" + projectTask + ", acceptCriteria=" + acceptCriteria
				+ ", priority=" + priority + ", status=" + status + ", dueDate=" + dueDate + ", createdAt=" + createdAt
				+ ", updateAt=" + updateAt + "]";
	}

}
