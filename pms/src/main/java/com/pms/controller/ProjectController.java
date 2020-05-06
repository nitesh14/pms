package com.pms.controller;

import java.util.Date;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.entity.Project;
import com.pms.repository.ProjectRepository;
import com.pms.util.Util;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/pms")
public class ProjectController {

	@Autowired
	private ProjectRepository repo;

	@GetMapping("/projects")
	public ResponseEntity<?> getProjects() {
		return ResponseEntity.ok(repo.findAll());
	}
	
	@GetMapping("/project/{id}")
    public ResponseEntity<?> getProject(@PathVariable(value = "id") Long id) {
		Project project = repo.findById(id).get();
        return ResponseEntity.ok().body(project);
    }

	@PostMapping("/create")
	public ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult results) {
		try {
			if (results.hasErrors()) {
				Map<String, Object> errors = Util.getFieldErrors(results);
				return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
			} else {
				project.setCreatedAt(new Date());
				repo.save(project);
				return new ResponseEntity<String>("Project Created Successfully", HttpStatus.OK);
			}
		} catch (Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateProject(@RequestBody Project project) {
		try {
			project.setUpdateAt(new Date());
			return ResponseEntity.ok(repo.save(project));

		} catch (Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
	}
	
	/*@PutMapping("/update/{id}")
	public ResponseEntity<?> updateProject(@PathVariable(value = "id") Long id, 
			@RequestBody Project project) {
		try {
			Project newproject = repo.findById(id).get();

			newproject.setProjectTask(project.getProjectTask());
			newproject.setAcceptCriteria(project.getAcceptCriteria());
			newproject.setPriority(project.getPriority());
			newproject.setStatus(project.getStatus());
			newproject.setUpdateAt(new Date());
			
			return ResponseEntity.ok(repo.save(newproject));

		} catch (Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
	}*/
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProject(@PathVariable(value = "id") Long id) {
		try {
			repo.deleteById(id);
			return new ResponseEntity<String>("Project Deleted Successfully", HttpStatus.OK);
		} catch(Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
		
	}
}
