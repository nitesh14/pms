package com.pms.repository;

import org.springframework.stereotype.Repository;
import com.pms.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
